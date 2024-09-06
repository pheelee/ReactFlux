import { useParams } from "react-router-dom";

import { useStore } from "@nanostores/react";
import { buildEntriesUrl, markCategoryAsRead } from "../apis";
import { apiClient } from "../apis/ofetch";
import Content from "../components/Content/Content";
import { settingsState } from "../store/settingsState";

const Category = () => {
  const { id: categoryId } = useParams();
  const { orderBy, pageSize } = useStore(settingsState);

  const getCategoryEntries = async (offset = 0, status = null) => {
    const baseParams = {
      baseUrl: `/v1/categories/${categoryId}/entries`,
      orderField: orderBy,
      offset,
      limit: pageSize,
      status,
    };

    return apiClient.get(buildEntriesUrl(baseParams));
  };

  return (
    <Content
      info={{ from: "category", id: categoryId }}
      getEntries={getCategoryEntries}
      markAllAsRead={() => markCategoryAsRead(categoryId)}
    />
  );
};

export default Category;