import ReportContentList from "./ReportContentList";

interface Props {
  reportList: [];
  onDelete: () => void;
}

const All = (props: Props) => {
  return (
    <div>
      <ReportContentList reportList={props.reportList} onDelete={props.onDelete} />
    </div>
  );
};

export default All;
