import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDynamicSvg = (iconName: string): void => {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);

  // dynamically import the mentioned svg icon name in props
  const importSvgIcon = useCallback(async (): Promise<void> => {
    // please make sure all your svg icons are placed in the same directory
    // if we want that part to be configurable then instead of iconName we will send iconPath as prop
    try {
      setLoading(true);
      importedIconRef.current = (
        await import("../../../assets/svg/facebook-24.svg")
      ).ReactComponent; // svgr provides ReactComponent for given svg path

      console.log(await import("../../../assets/svg/facebook-24.svg"));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    importSvgIcon();
  }, [importSvgIcon]);

  return { loading, SvgIcon: importedIconRef.current };
};
