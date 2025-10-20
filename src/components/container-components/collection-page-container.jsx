import { useSelector } from "react-redux";

import { selectIsCollectionLoading, selectShopIsfetching } from "../../redux/collection/colloction-selector";
import WithSpinner from "../withspinner-component/withspinner.component";
import CollectionPage from "../../pages/collection-component/collection.component";
import { createStructuredSelector } from "reselect";


const CollectionPageContainer = () => {
  const structuredSelector = createStructuredSelector({
      loading:  selectShopIsfetching
  })
  const {loading} = useSelector(structuredSelector)
  const CollectionPageWithSpinner = WithSpinner(CollectionPage)
  return <CollectionPageWithSpinner loading={loading}/>

}

export default (CollectionPageContainer)