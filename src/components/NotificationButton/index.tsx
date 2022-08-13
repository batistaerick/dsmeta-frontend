import axios from "axios";
import { FC } from "react";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

interface NotificationButtonProps {
  saleId: number;
}

export const NotificationButton: FC<NotificationButtonProps> = ({ saleId }) => {
  const handleClick = (id: number) => {
    axios(`${BASE_URL}/sms/${id}`).then(() =>
      toast.info("SMS enviado com sucesso!")
    );
  };

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notify" />
    </div>
  );
};
