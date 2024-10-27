// pages/index.tsx
import { NextPage } from "next";
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const router = useRouter();

  const navigateToPage = (path: string) => {
     router.push(path);
  };

  return (
    <div> 
      <button onClick={() => navigateToPage('/route1')}>Navigate to Route 1</button>
      <button onClick={() => navigateToPage('/route2')}>Navigate to Route 2</button>
    </div>
  );
};

export default HomePage;