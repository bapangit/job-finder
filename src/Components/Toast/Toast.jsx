function Toast({ text }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "92%",
        left: "1%",
        backgroundColor: "white",
        borderRadius: "4px",
        zIndex: "99",
        padding: "6px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        fontSize: "smaller",
      }}
    >
      {/* BODY */}
      {text}
    </div>
  );
}
export default Toast;
