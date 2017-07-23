import './leancloudWrapper';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const questions = [
  {
    title: "问题1",
    content: "头像照片不规范",
  },
  {
    title: "问题2",
    content: "头像照片身份证看不清",
  },
  {
    title: "问题3",
    content: "授权书申请原因和申请表不一致",
  },
  {
    title: "问题4",
    content: "身份证信息被遮盖",
  },
  {
    title: "问题5",
    content: "头像照片，授权书没有照完整",
  }
];

class QustionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  onChange(event) {
    console.log(arguments);
    this.setState({ value: event.target.value });
  }
  selectQuestion(q) {
    if ((typeof this.props.selectQ) == 'function') {
      this.props.selectQ(q);
    }
  }
  render() {
    const _this = this;
    const questionDoms = questions.map(function (q, i) {
      let style = { display: "none" };
      if (_this.state.value == "" || (q['content']).indexOf(_this.state.value) >= 0) {
        style = {};
      }
      return (
        <a data-i={i} onClick={_this.selectQuestion.bind(_this, q)} style={style} key={i} className="list-group-item active">
          <h4 className="list-group-item-heading">{q['title']}</h4>
          <p className="list-group-item-text">{q['content']}</p>
        </a>);
    });
    return (
      <div className="block panel panel-default">
        <div className="panel-heading">问题解答</div>
        <div className="panel-body">
          <form className="navbar-form navbar-left block_content" role="search">
            <div className="form-group block_content search_block">
              <input value={this.state.value} onChange={this.onChange.bind(this)} type="text" className="form-control block_content" placeholder="Search" />
            </div>
            <div className="list-group">
              {questionDoms}
            </div>
          </form>
        </div>
      </div>
    );
  }
};

class Answer extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      title: (props.q && props.q['title']) || '请选择问题',
      content: (props.q && props.q['content']) || ''
    };
  }
  render() {
    return (
      <div className="block panel panel-default">
        <div className="panel-heading">问题答案</div>
        <div className="panel-body">
          <div className="jumbotron">
            <h3>{this.state.title}</h3>
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.i = 0;
    this.state = {
      q: null
    }
  }
  selectQ(q) {
    this.i++;
    this.setState({ q: q });
  }
  render() {
    console.log('app render');
    return (
      <div>
        <QustionsList selectQ={this.selectQ.bind(this)} />
        <Answer key={this.i} q={this.state.q} />
      </div>
    )
  }
};

AV.addItem({a:1});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);