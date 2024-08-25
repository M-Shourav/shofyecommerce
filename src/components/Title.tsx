interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children }: Props) => {
  return <h2 className="text-xl text-gray-900 font-semibold">{children}</h2>;
};

export default Title;
