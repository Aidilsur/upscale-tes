import { Loading } from "../../components";
import CardQuote from "./components/CardQuote";
import useGetQuotes from "./hooks/useGetQuotes";
import Style from "./style.module.css";

function Quotes() {
  const { data, isPending } = useGetQuotes();
  console.log("data :", data);
  return (
    <div>
      <h1>Quotes</h1>

      {isPending ? (
        <div className={Style.content}>
          <div className={Style.taskWrapper}>
            {Array(9)
              .fill(null)
              .map((_, idx) => (
                <Loading key={idx} />
              ))}
          </div>
        </div>
      ) : null}

      <div>
        <div className={Style.content}>
          {data?.quotes?.length ? (
            <div className={Style.quotesWrapper}>
              {data?.quotes?.map((item) => (
                <CardQuote key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className={Style.noData}>
              <p>tidak ada data</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quotes;
