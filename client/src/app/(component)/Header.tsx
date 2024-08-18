type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  return <h2 className="text-2xl font-semibold text-gray-700">{name}</h2>;
};

export default Header;
