// prisma/reset.js
// Run this file with: node prisma/reset.js
// This script deletes all data from all tables for a clean slate during development.

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Delete all data from dependent tables first
  await prisma.notification.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.certification.deleteMany();
  await prisma.project.deleteMany();
  await prisma.education.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.document.deleteMany();
  await prisma.review.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.templateSection.deleteMany();
  await prisma.template.deleteMany();
  await prisma.university.deleteMany();
  await prisma.country.deleteMany();
  await prisma.category.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.aIEnhancement.deleteMany();
  await prisma.analytics.deleteMany();
  await prisma.sharedLink.deleteMany();
  await prisma.user.deleteMany();

  console.log('✅ All data has been reset!');
}

main()
.catch((e) => {
    console.error('❌ Reset failed:', e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
