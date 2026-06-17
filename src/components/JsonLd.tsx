// Renders a JSON-LD <script>. Server component. The "<" escape prevents any
// chance of breaking out of the <script> via "</script>" in the data.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
