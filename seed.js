const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {


const user = await prisma.user.create({
    data: {
      name: 'Vansh',  
      email: 'vansh@example.com',
      password: 'secure123',
      subscriptionType: 'Free',
    },
  });

  const country = await prisma.country.create({
    data: {
      name: 'India',
    },
  });

  const university = await prisma.university.create({
    data: {
      name: 'Delhi University',
      countryId: country.id,
    },
  });

  const template = await prisma.template.create({
    data: {
      name: 'Modern Resume',
      category: 'Professional',
      isPremium: false,
      countryId: country.id,
      universityId: university.id,
    },
  });

  await prisma.favorite.create({
    data: {
      userId: user.id,
      templateId: template.id,
    },
  });

  await prisma.review.create({
    data: {
      userId: user.id,
      templateId: template.id,
      rating: 5,
      comment: 'Great design!',
    },
  });

  const document = await prisma.document.create({
    data: {
      userId: user.id,
      title: 'Backend Developer Resume',
      data: { sections: ['Education', 'Experience'] },
    },
  });

  await prisma.experience.create({
    data: {
      userId: user.id,
      documentId: document.id,
      role: 'Backend Developer',
      company: 'Tech Corp',
      startDate: new Date(),
    },
  });

  await prisma.education.create({
    data: {
      userId: user.id,
      documentId: document.id,
      degree: 'BCA',
      school: 'XYZ College',
      startDate: new Date(),
    },
  });

  await prisma.project.create({
    data: {
      userId: user.id,
      documentId: document.id,
      title: 'Resume Builder',
      description: 'Create resumes with templates',
      techStack: 'Node.js, Prisma, React',
    },
  });

  await prisma.certification.create({
    data: {
      userId: user.id,
      documentId: document.id,
      title: 'Full Stack Dev',
      issuer: 'Udemy',
      issueDate: new Date(),
    },
  });

  await prisma.subscription.create({
    data: {
      userId: user.id,
      status: 'Active',
      plan: 'Monthly',
      startedAt: new Date(),
      expiresAt: new Date(),
    },
  });

  await prisma.payment.create({
    data: {
      userId: user.id,
      amount: 599.99,
      status: 'Paid',
      method: 'UPI',
    },
  });

  await prisma.notification.create({
    data: {
      userId: user.id,
      message: 'Your resume has been downloaded 10 times!',
      read: false,
    },
  });

  console.log('✅ Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
