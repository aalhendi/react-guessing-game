import { OverlayStyled, SettingsStyled } from "../styles";

const SettingsStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#bebfa3",
};
const OverlayStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#000000",
  opacity: 0.7,
};

const Settings = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div style={OverlayStyle}>
      <div style={SettingsStyles}>
        <button onClick={onClose}>Close Settings</button>
        {children}
      </div>
    </div>
  );
};

export default Settings;
