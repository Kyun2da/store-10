import HttpStatusCode from '@/types/statusCode';
import { Response } from 'express';

export default function ApiResponse(
  res: Response,
  statusCode: HttpStatusCode,
  success: boolean,
  message?: string,
  result?: Record<string, any>
) {
  return res.status(statusCode).json({ success, message, result });
}
