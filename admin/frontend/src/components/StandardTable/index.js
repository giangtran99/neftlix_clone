/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import { formatNumber } from '../../utils/utils';
import styles from './index.less';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      return {
        selectedRowKeys: [],
        needTotalList,
      };
    }
    return null;
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    needTotalList = needTotalList.map(item => ({
      ...item,
      total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
    }));
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { data = {}, rowKey, ...rest } = this.props;

    const { list = [], pagination } = data;
    const pageSize = (process.env.REACT_APP_PAGESIZE && !Number.isNaN(process.env.REACT_APP_PAGESIZE)) ? Number(process.env.REACT_APP_PAGESIZE) : 10;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: false,
      position: ['bottomRight', /* 'topRight' */],
      pageSize,
      simple: true,
      itemRender: (current, type, originalElement) => {
        // console.log('render -> current, type, originalElement', current, type, originalElement);
        if (type === 'prev') {
          return <a>Tr?????c</a>;
        }
        if (type === 'next') {
          return <a>Sau</a>;
        }
        /* if (type === 'page') {
          return <a></a>;
        } */
        return originalElement;
      },
      ...rest.pagination,
      ...pagination,
    };

    if (rest.pagination)
      delete rest.pagination;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <Fragment>
                <a style={{ fontWeight: 600 }}>{formatNumber((pagination && pagination.total) || 0)}</a> b???n ghi.&nbsp;&nbsp;
                ???? ch???n <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> m???c&nbsp;&nbsp;
                {needTotalList.map(item => (
                  <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                    {item.title}
                    &nbsp;
                    <span style={{ fontWeight: 600 }}>
                      {item.render ? item.render(formatNumber(item.total)) : formatNumber(item.total)}
                    </span>
                  </span>
                ))}
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  B??? ch???n
                </a>
              </Fragment>
            }
            type="info"
            showIcon
          />
        </div>
        <Table
          rowKey={rowKey || 'id'}
          rowSelection={rowSelection}
          dataSource={list}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          scroll={{ x: 1500, y: 300 }}
          {...rest}
        />
      </div>
    );
  }
}

export default StandardTable;
