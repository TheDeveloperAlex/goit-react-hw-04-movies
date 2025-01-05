import { Button, Space } from "antd";
import { FC } from "react";
interface AuthButtonsProps {}

export const AuthButtons: FC<AuthButtonsProps> = (props) => {
  return (
    <Space>
      <Button>Log in</Button>
      <Button type="primary">Register</Button>
    </Space>
  );
};
