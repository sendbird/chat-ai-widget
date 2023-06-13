import {useEffect, useState} from "react";
import {HASHED_KEY_QUERY_PARAMETER_NAME, IS_WIDGET_PARAMETER_NAME} from "../const";

export function useGetHashedKey(): [string, boolean] {
  const [hashedKey, setHashedKey] = useState<string>('');
  const [isWidget, setIsWidget] = useState<boolean>(false);

  function setHashedKeyFromCurrentUrl(): void {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const parsedHashedKey: string | null = urlParams.get(HASHED_KEY_QUERY_PARAMETER_NAME);
    const parsedIsWidget: boolean = urlParams.get(IS_WIDGET_PARAMETER_NAME) === 'true';

    // console.log('## parsedHashedKey: ', parsedHashedKey);
    setIsWidget(parsedIsWidget);
    setHashedKey(parsedHashedKey);
  }
  useEffect(() => {
    // window.addEventListener('locationchange', setHashedKeyFromCurrentUrl);
    // return () => {
    //   window.removeEventListener('locationchange', setHashedKeyFromCurrentUrl);
    // };
    setHashedKeyFromCurrentUrl();

  }, []);
  return [hashedKey, isWidget];
}