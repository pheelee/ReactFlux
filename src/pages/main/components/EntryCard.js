import { Card, Typography } from "@arco-design/web-react";
import LazyLoadingImage from "./LazyLoadingImage";
import { useStore } from "../../../store/Store";
import "./EntryCard.css";
import classNames from "classnames";
import { formatDate } from "../../../utils/formatDate";
import { IconStarFill } from "@arco-design/web-react/icon";
import { useNavigate, useSearchParams } from "react-router-dom";
import FeedIcon from "./FeedIcon";
import { useConfigStore } from "../../../store/configStore";

const { Meta } = Card;

const EntryCard = ({ entry }) => {
  const activeEntry = useStore((state) => state.activeEntry);
  const clickCard = useStore((state) => state.clickCard);
  const isMobile = useStore((state) => state.isMobile);
  const showIcons = useConfigStore((state) => state.showIcons);
  const nav = useNavigate();
  const [params] = useSearchParams();
  const from = params.get("from") || "all";
  const id = params.get("id") || "";

  const formatURL = (from, id, entry) => {
    if (from === "all") {
      return `/?entry=${entry.id}`;
    } else {
      return id === ""
        ? `/?from=${from}&entry=${entry.id}`
        : `/?from=${from}&id=${id}&entry=${entry.id}`;
    }
  };

  const handelClickCard = (entry) => {
    clickCard(entry);
  };
  return (
    <Card
      hoverable
      className={classNames(
        "card-custom-hover-style",
        { selected: entry.id === activeEntry?.id },
        { read: entry.status === "card-read" },
      )}
      onClick={() => {
        nav(formatURL(from, id, entry));
        handelClickCard(entry);
      }}
      style={{ width: "100%", marginBottom: "10px", cursor: "pointer" }}
      cover={
        entry.imgSrc ? (
          <div style={{ height: 140, overflow: "hidden" }}>
            <LazyLoadingImage
              alt={entry.title}
              src={entry.imgSrc}
              className="card-cover"
              width={isMobile ? "100%" : "280px"}
              height="140px"
              status={entry.status}
            />
          </div>
        ) : null
      }
    >
      <Meta
        title={null}
        description={
          <div style={{ color: "var(--color-text-3)", fontSize: "12px" }}>
            <Typography.Text
              style={{
                lineHeight: "1em",
                fontSize: "15px",
                fontWeight: 500,
                color:
                  entry.status === "unread"
                    ? "var(--color-text-1)"
                    : "var(--color-text-3)",
              }}
            >
              {entry.title}
            </Typography.Text>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "8px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                {showIcons === "on" ? <FeedIcon feed={entry.feed} /> : null}
                {entry.feed.title.toUpperCase()}
                {" · "}
                {formatDate(entry.published_at)}
              </span>
              {entry.starred && <IconStarFill />}
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default EntryCard;