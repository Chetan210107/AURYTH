import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: FoundationPage,
})

function FoundationPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="border-border w-full max-w-2xl border bg-[#090908] px-8 py-12 sm:px-12">
        <p className="text-muted mb-5 text-xs tracking-[0.3em] uppercase">
          Independent fashion · Development foundation
        </p>
        <h1 className="m-0 w-full">
          <img
            src="/assets/brand/auryth-logo.png"
            alt="AURYTH"
            width="768"
            height="768"
            className="mx-auto block h-auto w-full max-w-[24rem] object-contain"
          />
        </h1>
        <p className="text-muted mt-6 max-w-prose leading-7">
          The application foundation is ready for development. Storefront,
          account, payment, and shipping features have not been implemented.
        </p>
      </section>
    </main>
  )
}
