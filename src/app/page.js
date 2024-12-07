import ButtonRounded from "@/components/ButtonRounded";
import ButtonSharpEdge from "@/components/ButtonSharpEdge";

export default function Home() {
  return (
    <div>
      <p className="font-skranji  text-title">I'm in the main.</p>
      <div className="grid gap-2">
        <ButtonRounded />
        <ButtonSharpEdge />
      </div>
    </div>
  );
}
