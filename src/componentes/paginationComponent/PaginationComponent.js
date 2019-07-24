import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object,
    PropTypes.number,
  ).isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 5,
};

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty
    const { items, initialPage } = this.props;

    if (items && items.length) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    const { items, initialPage } = this.props;
    if (items !== prevProps.items) {
      this.setPage(initialPage);
    }
    window.scrollTo(0, 0);
  }

  setPage(page) {
    const { items, pageSize } = this.props;
    let { pager } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager });

    // call change page function in parent component
    const { onChangePage } = this.props;
    onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage = 1, pageSize = 10) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage;
    let endPage;

    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  render() {
    const { pager } = this.state;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <div className="pagination">
        <ul className="pagination">
          <li className={`retangular ${(pager.currentPage === 1 ? 'disabled' : '')}`}>
            <span onClick={() => this.setPage(1)}>Primeira</span>
          </li>
          <li className={`retangular ${(pager.currentPage === 1 ? 'disabled' : '')}`}>
            <span onClick={() => this.setPage(pager.currentPage - 1)}>Anterior</span>
          </li>
          {pager.pages.map(
            (page, index) => (
              <li key={index} className={`quadrada ${(pager.currentPage === page ? 'active' : '')}`}>
                <span onClick={() => this.setPage(page)}>{page}</span>
              </li>
            ),
          )}
          <li className={`retangular ${(pager.currentPage === pager.totalPages ? 'disabled' : '')}`}>
            <span onClick={() => this.setPage(pager.currentPage + 1)}>Próxima</span>
          </li>
          <li className={`retangular ${(pager.currentPage === pager.totalPages ? 'disabled' : '')}`}>
            <span onClick={() => this.setPage(pager.totalPages)}>Ultima</span>
          </li>
        </ul>
      </div>
    );
  }
}

PaginationComponent.propTypes = propTypes;
PaginationComponent.defaultProps = defaultProps;
export default PaginationComponent;
