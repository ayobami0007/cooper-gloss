
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { formatNaira } from "@/lib/constants";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";


const COURSES = [
  {
    id: "online-lipgloss",
    name: "Lipgloss & Lipcare Formulation",
    mode: "Online Class",
    price: 25000,
  },
  {
    id: "online-pink-lips",
    name: "Pink Lips Cream Formulation",
    mode: "Online Class",
    price: 15000,
  },
  {
    id: "physical-lipgloss",
    name: "Lipgloss & Lipcare Formulation",
    mode: "Physical Class",
    price: 50000,
  },
  {
    id: "physical-pink-lips",
    name: "Pink Lips Cream Formulation",
    mode: "Physical Class",
    price: 20000,
  },
];

const TRAINING_BENEFITS = [
  {
    title: "Supplier Contacts",
    description:
      "Receive supplier contacts to help you source your materials.",
  },
  {
    title: "Learn with Cooper Gloss",
    description:
      "Learn using Cooper Gloss products as part of your training experience.",
  },
  {
    title: "Practical Learning",
    description:
      "A starter kit must be purchased for practical sessions.",
  },
];

function CourseCard({ course }) {
  const message = [
    "Hi Cooper Gloss!",
    "",
    "I'd like to enquire about your training.",
    `Course: ${course.name}`,
    `Class: ${course.mode}`,
    `Fee: ${formatNaira(course.price)}`,
    "",
    "Please share more details about enrolment.",
  ].join("\n");

  const enquiryLink = buildWhatsAppEnquiryLink(message);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-lilac-soft bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-lilac hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
      <span className="mb-4 inline-flex w-fit rounded-full bg-lilac-cloud px-3 py-1 font-body text-xs font-medium text-lilac-deep">
        {course.mode}
      </span>

      <h3 className="mb-3 font-display text-xl text-ink">
        {course.name}
      </h3>

      <p className="mb-6 font-display text-3xl text-lilac-deep">
        {formatNaira(course.price)}
      </p>

      <p className="mb-6 font-body text-sm leading-6 text-ink/70">
        Class details coming soon
      </p>

    <Link
  href={`/training/register?course=${course.id}`}
  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-lilac-deep px-5 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-lilac-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-deep focus-visible:ring-offset-2"
>
  Register Now
</Link>
    </article>
  );
}

export default function TrainingPage() {
  const onlineCourses = COURSES.filter(
    (course) => course.mode === "Online Class"
  );

  const physicalCourses = COURSES.filter(
    (course) => course.mode === "Physical Class"
  );

  return (
    <main className="overflow-hidden font-body text-ink">
      {/* Hero */}
      <section className="bg-lilac-cloud px-4 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-3 font-display text-lg italic text-lilac-deep">
              Gloss It. Care For It.
            </p>

            <h1 className="mb-5 font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Cooper Gloss Training
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">
              Ready to start your lip-care business or improve your
              formulation skills? Explore our online and physical
              training options and contact us to learn more about
              enrolment.
            </p>

            <a
              href="#training-options"
              className="mt-8 inline-flex rounded-full bg-lilac-deep px-7 py-3 font-medium text-white transition-colors hover:bg-lilac-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-deep focus-visible:ring-offset-2"
            >
              Explore Training
            </a>
          </Reveal>
        </div>
      </section>

      {/* Online classes */}
      <section
        id="training-options"
        className="mx-auto max-w-7xl scroll-mt-8 px-4 py-14 md:py-16"
      >
        <Reveal>
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-lilac-deep">
              Learn from anywhere
            </p>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Online Class
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink/70">
              Explore our online formulation training options.
              Contact us for details about the learning arrangement
              and enrolment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {onlineCourses.map((course, index) => (
            <Reveal key={course.id} delay={index * 100}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Physical classes */}
      <section className="border-y border-lilac-soft bg-white px-4 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-lilac-deep">
                Learn in person
              </p>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                Physical Class
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink/70">
                Prefer face-to-face training? Physical classes are
                available in Ilorin or Malete. Contact Cooper Gloss
                to discuss the details.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {physicalCourses.map((course, index) => (
              <Reveal key={course.id} delay={index * 100}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training information */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="mb-2 font-display text-lg italic text-lilac-deep">
              Before you enrol
            </p>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              What to Know
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TRAINING_BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-lilac-soft bg-lilac-cloud/50 p-6">
                <span
                  aria-hidden="true"
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-lilac-soft font-display text-lg text-lilac-deep"
                >
                  ✓
                </span>

                <h3 className="mb-2 font-display text-lg text-ink">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-6 text-ink/70">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final enquiry CTA */}
      <section className="bg-lilac-cloud px-4 py-14 text-center md:py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-display text-2xl text-ink sm:text-3xl">
              Ready to Get Started?
            </h2>

            <p className="mb-7 text-sm leading-7 text-ink/70 sm:text-base">
              Have questions about a course, practical sessions, or
              enrolment? Send Cooper Gloss a message on WhatsApp.
            </p>

            <a
              href={buildWhatsAppEnquiryLink(
                "Hi Cooper Gloss! I'd like to know more about your lip-gloss and lip-care training options and how to enrol."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-lilac-deep px-7 py-3 font-medium text-white transition-colors hover:bg-lilac-deep/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-deep focus-visible:ring-offset-2"
            >
              Ask Us on WhatsApp
            </a>

            <p className="mt-5 text-xs leading-5 text-ink/50">
              A starter kit must be purchased for practical sessions.
              Contact us for further training details.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
