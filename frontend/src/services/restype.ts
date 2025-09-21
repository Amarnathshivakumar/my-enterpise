/**
 * =====================================================
 *  NAME    : retype.ts
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: TYPESCRIPT TYPES FOR RESPOSNE DATA
 * =====================================================
 */

// TYPES
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
};
