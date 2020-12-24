import React from 'react';
import './main.less';
import Screen_01 from './screen_01';
import Screen_02 from './screen_02';
import Screen_03 from './screen_03';
import Screen_04 from './screen_04';
import Screen_05 from './screen_05';
import Screen_06 from './screen_06';
import Screen_07 from './screen_07';
import Screen_08 from './screen_08';

import $ from 'jquery';

export default class background extends React.Component {
	constructor(props) {
		super(props);

		let p = { ...this.props.data };
		for (var i in p) {
			p[i] = false;
		}
		this.state = p;

		const root = this;
		this.tr = {
			o: 0,
			time: 1,
			init() {
				this.c = $(root.refs.main);
				this.tran();
			},
			in() {
				this.o = 1;
				this.tran();
			},
			tran() {
				this.c.css({
					opacity: this.o,
				});
			},
		};
	}

	in() {
		this.tr.in();
		this.setState(this.props.data);
	}

	componentDidMount() {
		this.tr.init();
	}

	stopAudio() {
		if (this.refs.mp3) this.refs.mp3.stopAudio();
	}

	playAudio() {
		if (this.refs.mp3) this.refs.mp3.playAudio();
	}

	append_screen_01() {
		if (this.state.animate_screen_1) return <Screen_01 />;
	}
	append_screen_02() {
		if (this.state.animate_screen_2) return <Screen_02 />;
	}
	append_screen_03() {
		if (this.state.animate_screen_3) return <Screen_03 />;
	}
	append_screen_04() {
		if (this.state.animate_screen_4) return <Screen_04 />;
	}
	append_screen_05() {
		if (this.state.animate_screen_5) return <Screen_05 />;
	}
	append_screen_06() {
		if (this.state.animate_screen_6) return <Screen_06 />;
	}
	append_screen_07() {
		if (this.state.animate_screen_7) return <Screen_07 />;
	}
	append_screen_08() {
		if (this.state.animate_screen_8) return <Screen_08 ref='mp3' />;
	}

	render() {
		return (
			<div ref='main' className='background'>
				{this.append_screen_01()}
				{this.append_screen_02()}
				{this.append_screen_03()}
				{this.append_screen_04()}
				{this.append_screen_05()}
				{this.append_screen_06()}
				{this.append_screen_07()}
				{this.append_screen_08()}
			</div>
		);
	}
}
