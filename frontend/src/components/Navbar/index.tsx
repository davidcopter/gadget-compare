type Props = {
  title: string;
};

export function Navbar({ title }: Props) {
  return (
    <div className="shadow px-2 sm:px-4">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center text-black font-semibold text-blue-600">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
