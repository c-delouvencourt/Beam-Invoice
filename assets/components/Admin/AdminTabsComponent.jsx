import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import StatusUtils from "../../utils/StatusUtils";
import {withRouter} from "react-router";

class AdminTabsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <div className="tabs is-small">
        <ul>
          <li className={StatusUtils.isActiveUrl("/admin/society", this.props.location.pathname, "")}><Link to={"/admin/society"}>{t('admin.society')}</Link></li>
          <li className={StatusUtils.isActiveUrl("/admin/users", this.props.location.pathname, "")}><Link to={"/admin/users"}>{t('admin.users')}</Link></li>
          <li className={StatusUtils.isActiveUrl("/admin/settings", this.props.location.pathname, "")}><Link to={"/admin/settings"}>{t('admin.settings')}</Link></li>
          <li className={StatusUtils.isActiveUrl("/admin/updates", this.props.location.pathname, "")}><Link to={"/admin/updates"}>{t('admin.updates')}</Link></li>
        </ul>
      </div>
    );
  }
}

export default withTranslation()(withRouter(AdminTabsComponent));
