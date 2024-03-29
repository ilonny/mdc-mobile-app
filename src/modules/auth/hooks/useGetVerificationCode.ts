import { useState, useCallback } from 'react';
import { getConfirmCode } from '../network';
type TCodeResult = {
  salt: string;
} | null;

type TResponse = {
  requestCodeResult: TCodeResult;
  requestConfirmationCode: (phone: string) => void;
  requestCodeLoading: boolean;
};

export const useGetVerificationCode = (): TResponse => {
  const [requestCodeResult, setRequestCodeResult] =
    useState<null | TCodeResult>(null);
  const [requestCodeLoading, setRequestCodeLoading] = useState(false);

  const requestConfirmationCode = useCallback(async (phone: string) => {
    setRequestCodeLoading(true);
    if (phone[0] !== '+') {
      phone = '+' + phone;
    }
    const code = await getConfirmCode(phone);
    setRequestCodeResult(code?.data);
    setRequestCodeLoading(false);
  }, []);

  return { requestCodeResult, requestConfirmationCode, requestCodeLoading };
};
