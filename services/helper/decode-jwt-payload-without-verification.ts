export function decodeJWTPayloadWithoutVerification(token: string) {
  const [, payloadStr] = token.split('.');
  return JSON.parse(atob(payloadStr));
}

export default decodeJWTPayloadWithoutVerification;
export type DecodeJWTPayloadWithoutVerification =
  typeof decodeJWTPayloadWithoutVerification;
