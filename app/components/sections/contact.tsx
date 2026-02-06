import { Container } from '../ui/container';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

export function Contact() {
  return (
    <section
      id="contact"
      className="pt-20 bg-background relative overflow-hidden">
      <Container className="max-w-[1500px]">
        <div className="grid grid-cols-12 items-end">
          <div className="col-span-2" />
          <div className="col-span-6 p-30 border-2 border-b-0 rounded-t-lg border-primary h-fit">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Email Alerts
            </h2>
            <form className="space-y-6">
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                className="max-w-md rounded-lg border-2 h-12 text-base"
              />
              <div className="flex flex-wrap gap-6 text-sm">
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
          <div className="col-span-4 p-20 border-2 border-b-0 border-l-0 rounded-tr-lg border-primary h-fit">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Investor Contact
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
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
