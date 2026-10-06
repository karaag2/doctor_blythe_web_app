import Button from "./Button";
import clsx from "clsx";

const DetailCard = (props: {
  heading?: string;
  title?: string;
  detail?: string;
  buttontitle?: string;
  isbutton?: boolean;
  styles?: string;
  special?: boolean;
  onButtonClick?: () => void;
}) => {
  const onbutton = props.isbutton ? props.isbutton : false;
  return (
    <div
      className={clsx(
        "z-10 relative space-y-4 px-4 sm:px-6 font-[Montserrat]",
        props.styles
      )}
    >
      <div className="space-y-1">
        {props.heading && (
          <h1 className="font-bold text-sky-500 text-xs uppercase tracking-widest">
            {props.heading}
          </h1>
        )}
        <h2
          className={clsx(
            "font-extrabold text-slate-900 text-2xl sm:text-4xl capitalize tracking-tight",
            props.special ? "!text-3xl sm:!text-5xl" : ""
          )}
        >
          {props.title}
        </h2>
      </div>
      {props.detail && (
        <div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {props.detail}
          </p>
        </div>
      )}
      {onbutton && (
        <div className="pt-2">
          <Button
            title={props.buttontitle ? props.buttontitle : "En savoir plus"}
            onClick={props.onButtonClick}
            addStyle="w-full sm:w-auto"
          />
        </div>
      )}
    </div>
  );
};

export default DetailCard;
