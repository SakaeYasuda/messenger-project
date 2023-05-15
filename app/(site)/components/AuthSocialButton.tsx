import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
  icon: IconType,
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps>= ({
  icon: Icon,
  onClick
}) => {
  return (
      <button
        type="button"
        onClick={onClick}
        className="
          inline-flex
          justify-center
          py-2
          px-4
          rounded-md
          w-full
          bg-white
          text-gray-500
          hover:bg-gray-50
          ring-1
          ring-inset
          ring-gray-300
          focus:outline-offset-0
        "
      >
        <Icon />
    </button>
  );
}

export default AuthSocialButton;