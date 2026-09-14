const content = `# Praevoryn

> Praevoryn is a human-centred technology company building intelligent systems for progress.

Canonical website: https://www.praevoryn.com

## Company

Praevoryn builds technology designed to strengthen human clarity, capability and agency. Its guiding belief is that technology should expand what people can become.

## Founder

Chukwudumebi Orakwue is the founder and CEO of Praevoryn and the founder of ASCEND.
Founder profile: https://www.praevoryn.com/founder

## Flagship product

ASCEND is Praevoryn's flagship product and is positioned as an operating system for human potential. It helps people understand where they are, choose a direction, discover relevant opportunities and turn goals into measurable progress.
Official ASCEND website: https://ascendai.space
Praevoryn product page: https://www.praevoryn.com/products

## Official profiles

X: https://x.com/praevoryn
Instagram: https://www.instagram.com/praevoryn
Founder LinkedIn: https://www.linkedin.com/in/chukwudumebi-orakwue-198230419
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
