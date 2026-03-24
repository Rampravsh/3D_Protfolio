const Button = ({ text, href, id, className, ...props }) => {
  const commonProps = {
    id,
    className: `${className ?? ""} cta-wrapper`,
    ...props,
  };

  const buttonContent = (
    <div className="cta-button group">
      <div className="bg-circle" />
      <p className="text">{text}</p>
      <div className="arrow-wrapper">
        <img src="/images/arrow-down.svg" alt="arrow" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {buttonContent}
    </button>
  );
};

export default Button;
