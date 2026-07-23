interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SidebarOverlay({
  open,
  onClose,
}: Props) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed
        inset-0
        z-40
        bg-black/60
        backdrop-blur-sm
        transition-opacity
        duration-300
        lg:hidden

        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }
      `}
    />
  );
}