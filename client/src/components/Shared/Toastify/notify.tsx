import { toast } from 'react-toastify';

type Type = 'info' | 'success' | 'warning' | 'error' | 'default' | 'dark';

const notify = (type: Type, message: string) => {
  switch (type) {
    case 'info':
      toast.info(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'default':
      toast(message);
      break;
    case 'dark':
      toast.dark(message);
      break;
    default:
      toast(message);
      break;
  }
};

export default notify;
