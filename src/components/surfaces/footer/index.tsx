export type FooterProps = {};

export function Footer() {
  return (
    <footer className="item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700">
      Super Festval &copy; | {new Date().getFullYear()} | Todos os direitos
      reservados
    </footer>
  );
}
