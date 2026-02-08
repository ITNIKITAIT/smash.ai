import { Container } from '../ui/container';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

export function Contact() {
  return (
    <section
      id="contact"
      className="md:pt-20 pt-5 bg-background relative overflow-hidden">
      <Container className="max-w-[1500px] px-0">
        <div className="grid md:grid-cols-12 grid-cols-1 items-end">
          <div className="hidden md:block col-span-2" />
          <div className="md:col-span-6 col-span-1 md:p-30 p-8 border-t-2 md:border-x-2 border-b-0 md:rounded-t-lg border-primary h-fit">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Email Alerts
            </h2>
            <form className="md:space-y-6 space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                className="max-w-md rounded-lg border-2 h-12 text-base"
              />
              <div className="flex flex-wrap md:gap-6 gap-2 md:text-sm text-xs">
                {['News', 'Token Updates', 'Events'].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 cursor-pointer text-foreground">
                    <Checkbox name="alerts" value={label} />
                    <span className="uppercase tracking-wide">{label}</span>
                  </label>
                ))}
              </div>
              <Button
                variant="glow"
                size="xl"
                className="rounded-lg font-semibold uppercase">
                Submit
              </Button>
            </form>
          </div>
          <div className="md:col-span-4 col-span-1 md:p-20 p-8 border-t-2 md:border-r-2 border-b-0 md:rounded-tr-lg border-primary h-fit">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Investor Contact
            </h2>
            <p className="text-muted-foreground md:text-base text-sm leading-relaxed mb-8">
              Questions for the Investor Relations department can be emailed to{' '}
              <a
                href="mailto:hello@sms.ai"
                className="text-primary hover:underline font-medium">
                hello@sms.ai
              </a>{' '}
              or submitted by clicking on the button below.
            </p>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="rounded-lg font-semibold uppercase">
              <a href="mailto:hello@sms.ai">Contact us</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
