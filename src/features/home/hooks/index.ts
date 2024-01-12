// Custom hook
import { useAppSelector } from "@/features/app/hooks/index";

export const useHome = (): any => {
  const homeStore = useAppSelector((state: any) => state.home);

  return {
    homeStore,
  };
};
