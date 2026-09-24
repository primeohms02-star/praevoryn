const content = `# Praevoryn

> Praevoryn is a human-centred technology company building intelligent systems for progress.

Canonical website: https://www.praevoryn.com
Official name: Praevoryn
Category: Human-centred technology company
Tagline: Building what comes next.

## Company

Praevoryn builds technology designed to strengthen human clarity, capability and agency. Its guiding belief is that technology should expand what people can become.

Praevoryn is the parent technology company behind ASCEND. Praevoryn and ASCEND are distinct brands: Praevoryn is the company, and ASCEND is its flagship platform.

## Founder

Chukwudumebi Orakwue is a technology founder, the founder and CEO of Praevoryn, and the founder and CEO of ASCEND.
Founder profile: https://www.praevoryn.com/founder
ASCEND founder profile: https://ascendai.space/founder
Founder LinkedIn: https://www.linkedin.com/in/chukwudumebi-orakwue-198230419

## Flagship product

ASCEND is Praevoryn's flagship product and is positioned as an operating system for human potential. It helps people understand where they are, choose a direction, discover relevant opportunities and turn goals into measurable progress.
Official ASCEND website: https://ascendai.space
Praevoryn product page: https://www.praevoryn.com/products

## Official profiles
- LinkedIn: https://www.linkedin.com/company/praevoryn/

X: https://x.com/praevoryn
Instagram: https://www.instagram.com/praevoryn
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
