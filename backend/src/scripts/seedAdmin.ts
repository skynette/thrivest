import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';

const seedAdminUsers = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@thrivest.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'YourSecurePassword123!';
    const superAdminEmail = process.env.SUPER_ADMIN_EMAIL || 'superadmin@thrivest.com';
    const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD || 'YourSecurePassword123!';

    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!existingAdmin) {
      const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
      
      await prisma.user.create({
        data: {
          email: adminEmail,
          password: hashedAdminPassword,
          firstName: 'ThriVest',
          lastName: 'Admin',
          role: 'ADMIN',
          isActive: true,
        },
      });

      console.log(`✅ Admin user created: ${adminEmail}`);
    } else {
      console.log(`ℹ️  Admin user already exists: ${adminEmail}`);
    }

    // Check if super admin user already exists
    const existingSuperAdmin = await prisma.user.findUnique({
      where: { email: superAdminEmail },
    });

    if (!existingSuperAdmin) {
      const hashedSuperAdminPassword = await bcrypt.hash(superAdminPassword, 10);
      
      await prisma.user.create({
        data: {
          email: superAdminEmail,
          password: hashedSuperAdminPassword,
          firstName: 'ThriVest',
          lastName: 'Super Admin',
          role: 'SUPER_ADMIN',
          isActive: true,
        },
      });

      console.log(`✅ Super Admin user created: ${superAdminEmail}`);
    } else {
      console.log(`ℹ️  Super Admin user already exists: ${superAdminEmail}`);
    }

    console.log('🎉 Admin seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding admin users:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

// Run the seeding function
if (require.main === module) {
  seedAdminUsers();
}

export default seedAdminUsers;