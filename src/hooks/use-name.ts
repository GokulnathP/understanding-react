
const useUser = () => {
  return { name: 'Test user' };
}

const useName = () => {
  const user = useUser();
  return user.name;
}

export default useName;
