import { compose } from "redux";

import { selectShopIsfetching } from "../../redux/collection/colloction-selector";

import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../withspinner-component/withspinner.component";
import CollectionOverview from "../collections-overview-component/collections-overview.component";


const CollectionOverviewContainer = () => {
    const structuredSelector = createStructuredSelector({
        loading: selectShopIsfetching
    })
   const {loading} = useSelector(structuredSelector)
   const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
    return <CollectionOverviewWithSpinner loading={loading}/>
}

export default (CollectionOverviewContainer)