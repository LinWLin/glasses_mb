angular.module("glasses",["ng","ui.bootstrap","ngRoute","ngAnimate","ngSanitize"])

	.config(function($routeProvider){
		$routeProvider
			/*首页*/
			.when('/glasses_index',{templateUrl:"page/glasses_index.html",controller:"indexCtrl"})
			/*登录页*/
			.when('/login',{templateUrl:"page/login.html",controller:"loginCtrl"})
			/*注册页*/
			.when('/register',{templateUrl:"page/register.html",controller:"registerCtrl"})
			/*个人中心页*/
			.when('/mycenter',{templateUrl:"page/mycenter.html",controller:"mycenterCtrl"})
			/*光学眼镜类页*/
			.when('/classify',{templateUrl:"page/classify.html",controller:"classifyCtrl"})
			/*眼镜详情页*/
			.when('/detail',{templateUrl:"page/detail.html",controller:"detailCtrl"})
			/*个人资料页*/
			.when('/myInfo',{templateUrl:"page/myInfo.html",controller:"myInfoCtrl"})
			/*我的订单页*/
			.when('/myOrder',{templateUrl:"page/myOrder.html",controller:"myOrderCtrl"})
			/*购物车*/
			.when('/shopping_cart',{templateUrl:"page/shopping_cart.html",controller:"shoppingCtrl"})
			/*确认订单 1 */
			.when('/confirmOrder',{templateUrl:"page/confirmOrder.html",controller:"confirmOrderCtrl"})
			/*确认订单 2 */
			.when('/confirm',{templateUrl:"page/confirmOrder_detail.html",controller:"confirmCtrl"})
			/* 立即购买 */
			.when('/buyNow',{templateUrl:"page/buyNow.html",controller:"buyNowCtrl"})
			/*收银台*/
			.when('/cashier',{templateUrl:"page/cashier.html",controller:"cashierCtrl"})

			.otherwise({redirectTo:'/glasses_index'})
	})
	//首页
	.controller('indexCtrl',function($scope){
		$scope.myInterval = 5000;  //轮播时长
	    $scope.noWrapSlides = false;  //
	    var slides = $scope.slides = [
	    	{ image: 'img/banner1.png' },
	    	{ image: 'img/banner2.png' },
	    	{ image: 'img/banner3.jpg' },
	    	{ image: 'img/banner4.jpg' },
	    	{ image: 'img/banner5.jpg' }
	    ];  
	    var newWidth = 600 + slides.length + 1;  

	    var memues = $scope.memues=[
	    	{ href: "#/classify", class: "memu-icon-1", text: "光学眼镜" },
	    	{ href: "javascript:;", class: "memu-icon-2", text: "太阳眼镜" },
	    	{ href: "javascript:;", class: "memu-icon-3", text: "儿童眼镜" },
	    	{ href: "javascript:;", class: "memu-icon-4", text: "品牌镜片" },
	    	{ href: "javascript:;", class: "memu-icon-5", text: "新品上市" },
	    	{ href: "javascript:;", class: "memu-icon-6", text: "美瞳隐形" },
	    	{ href: "javascript:;", class: "memu-icon-7", text: "潮流镜架" },
	    	{ href: "javascript:;", class: "memu-icon-8", text: "功能眼镜" },
	    	{ href: "javascript:;", class: "memu-icon-9", text: "保养护理" },
	    	{ href: "javascript:;", class: "memu-icon-10", text: "线下店铺" }
	    ];

	    var prdHead = $scope.prdHead=[
	    	{ 
	    		title: "热销新品", 
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/1470_thumb_G_1421372687576.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/LH0113-C1(1).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"32"
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/LH6105-C2(2).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"65" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/lh6188-c1(1).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"23" }
	    		]
	    	},
	    	{ 
	    		title: "太阳眼镜",
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/p3041.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"65" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/p3042.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/1549_thumb_G_1427998535018.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"105" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/2759_thumb_G_1420402985320.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"11" }
	    		]
	    	},
	    	{ 
	    		title: "美瞳隐形",
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/G_1470247115770933634.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"14" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/G_1470252864754466689.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"21" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/G_1470253649090578113.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"62"
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/G_1470261957431618521.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"84" 
	    			}
	    		]
	    	},
	    	{ 
	    		title: "潮流镜架",
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/1046_thumb_G_1421369272414.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"95" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/1470_thumb_G_1421372687576.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"5" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/ljjh6187-c1(1).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"10" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/lh6188-c1(1).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"65" 
	    			}
	    		]
	    	},
	    	{ 
	    		title: "儿童眼镜",
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/rt4215.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/rt4218.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/rt4219.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/rt4623.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			}
	    		]
	    	},
	    	{ 
	    		title: "保养护理",
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/20f9372a-ca35-4660-9131-133500e657e5-350-350.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/c6b4efb9-07e8-44cc-b10c-15aed7f1e1c0-350-350.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/522e5fad-8784-4345-800e-cc0c474a85ca-350-350.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/c9e5633e-81c0-4a6e-ba80-d0768fac5d03-350-350.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			}
	    		]
	    	},
	    	{ 
	    		title: "猜你喜欢",
	    		products:[
	    			{ 	href:"#/detail",
	    				image: "img/3281_thumb_G_1430271694669.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/LH6105-C2(2).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/lh6188-c1(1).jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			},
	    			{ 	href:"#/detail",
	    				image: "img/1470_thumb_G_1421372687576.jpg", 
	    				desc:"我怎么知道什么内容反正便宜卖", 
	    				price:"￥<span>29</span>.9", 
	    				sold:"15" 
	    			}
	    		]
	    	}
	    ];	    
	})
	
	// 个人中心页
	.controller('mycenterCtrl',function($scope){
		var status = $scope.status =[
			{ class:"mycenterimg1",txt:"待付款" },
			{ class:"mycenterimg2",txt:"待发货" },
			{ class:"mycenterimg3",txt:"待收货" },
			{ class:"mycenterimg4",txt:"待评价" },
			{ class:"mycenterimg5",txt:"退款/售后" }
		];
		var listes = $scope.listes =[
			{ href:"#/shopping_cart",txt:"购物车"},
			{ href:"javascript:;",txt:"优惠劵"},
			{ href:"javascript:;",txt:"收藏夹"},
			{ href:"javascript:;",txt:"足记"},
			{ href:"javascript:;",txt:"地址管理"},
			{ href:"javascript:;",txt:"密码管理"},
			{ href:"javascript:;",txt:"帮助与客服"}
		];
	})

	// 登录页
	.controller('loginCtrl',function($scope){
		$scope.focus=false;
		$scope.isTrue = true;
		$scope.isFalse = false;
		$scope.login1 = function(){
			$scope.focus = false;
			$scope.isTrue = true;
			$scope.isFalse = false;
		};
		$scope.login2 = function(){
			$scope.focus = true;
			$scope.isTrue = false;
			$scope.isFalse = true;
		};
	})

	// 注册页
	.controller('registerCtrl',function(){	
	})

	// 个人资料页
	.controller('myInfoCtrl',function(){
	})

	// 光学眼镜类页
	.controller('classifyCtrl',function($scope){
		var detailList = $scope.detailList = [
			{ 	href: "#/detail", 
				src: "img/1470_thumb_G_1421372687576.jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/LH6105-C2(2).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img//LH6105-C2(2).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/lh6188-c1(1).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/1046_thumb_G_1421369272414.jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/1470_thumb_G_1421372687576.jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/ljjh6187-c1(1).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/lh6188-c1(1).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/lh6188-c1(1).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/1046_thumb_G_1421369272414.jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/1470_thumb_G_1421372687576.jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/ljjh6187-c1(1).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/lh6188-c1(1).jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			},
			{ 	href: "javascript:;", 
				src: "img/1046_thumb_G_1421369272414.jpg", 
				desc: "我怎么知道什么内容反正便宜卖", 
				price:"￥<span>29</span>.9", 
				sold:"15"  
			}
		];
	})

	// 眼镜详情页
	.controller('detailCtrl',function($scope){
		$scope.myInterval = 5000;  //轮播时长
	    $scope.noWrapSlides = false;  //
	    var slides = $scope.slides = [
	    	{ image: 'img/LH6105-C2(2).jpg' },
	    	{ image: 'img/rt4218.jpg' },
	    	{ image: 'img/rt4623.jpg' }
	    ];  
	    var newWidth = 600 + slides.length + 1;  

	    var detailPrd = $scope.detailPrd = [
	    	{ 	href: "#/detail", 
	    		src: "img/1470_thumb_G_1421372687576.jpg",
	    		desc: "我怎么知道什么内容反正便宜卖",
	    		price: "￥<span>29</span>.9",
	    		sold: "23"
	    	},
	    	{ 	href: "#/detail", 
	    		src: "img/1470_thumb_G_1421372687576.jpg",
	    		desc: "我怎么知道什么内容反正便宜卖",
	    		price: "￥<span>29</span>.9",
	    		sold: "23"
	    	},
	    	{ 	href: "#/detail", 
	    		src: "img/1470_thumb_G_1421372687576.jpg",
	    		desc: "我怎么知道什么内容反正便宜卖",
	    		price: "￥<span>29</span>.9",
	    		sold: "23"
	    	},
	    	{ 	href: "#/detail", 
	    		src: "img/1470_thumb_G_1421372687576.jpg",
	    		desc: "我怎么知道什么内容反正便宜卖",
	    		price: "￥<span>29</span>.9",
	    		sold: "23"
	    	}
	    ];

	    $scope.isHover = true;
		$scope.isTrue = false;
		$scope.isFalse = false;
		$scope.cut1 = function(){
			$scope.isHover = true;
			$scope.isTrue = false;
			$scope.isFalse = false;
		};
		$scope.cut2 = function(){
			$scope.isHover = false;
			$scope.isTrue = true;
			$scope.isFalse = false;
		};
		$scope.cut3 = function(){
			$scope.isHover = false;
			$scope.isTrue = false;
			$scope.isFalse = true;
		};

		// 商品评价
		var prdEval = $scope.prdEval = [
			{ 
				userName: "lhsj_135******730", 
				eval:'<span>标签：</span> <b class="cnt_tag">质量好</b> <b class="cnt_tag">做工精细</b>',
				discuss: "小心啊！打雷喽！下雨收衣服啊！" 
			},
			{ 
				userName: "lhsj_135******730", 
				eval:'<span>标签：</span> <b class="cnt_tag">帅气逼人</b> <b class="cnt_tag">做工精细</b>',
				discuss:'人和妖精都是妈生的，不同的人是人他妈的，妖是妖他妈的' 
			},
			{ 
				userName: "lhsj_135******730", 
				eval:'<span>标签：</span> <b class="cnt_tag">靓丽</b>',
				discuss: "所以说做妖就象做人一样，要有仁慈的心，有了仁慈的心，就不再是妖，是人妖。" 
			},
			{ 
				userName: "lhsj_135******730", 
				eval:'<span>标签：</span> <b class="cnt_tag">质量好</b> <b class="cnt_tag">做工精细</b>',
				discuss:"你想要啊？悟空，你要是想要的话你就说话嘛，你不说我怎么知道你想要呢，虽然你很有诚意地看着我，可是你还是要跟我说你想要的。你真的想要吗？那你就拿去吧！你不是真的想要吧？难道你真的想要吗？"
			}
		];

		// 商品参数
		var prdArgument = $scope.prdArgument = [
			{  action: "品牌", actionValue: "悟空" },
			{  action: "功能", actionValue: "正常" },
			{  action: "性别", actionValue: "男猴" },
			{  action: "款式", actionValue: "潮流" },
			{  action: "风格", actionValue: "大自然" },
			{  action: "条码", actionValue: "没有" },
			{  action: "规格", actionValue: "180以上吧" },
			{  action: "镜架高", actionValue: "用不着" },
			{  action: "鼻梁宽", actionValue: "20" },
			{  action: "镜架外宽", actionValue: "不知道" },
			{  action: "镜架宽", actionValue: "别烦" },
			{  action: "镜腿长", actionValue: "窝草" },
			{  action: "镜架内宽", actionValue: "你再问一遍" },
			{  action: "颜色", actionValue: "棕色" },
			{  action: "边框", actionValue: "神马" },
			{  action: "大小", actionValue: "不小" },
			{  action: "框型", actionValue: "找打" },
			{  action: "价格", actionValue: "那老贵了" }
		];

	})

	/*我的订单页*/
	.controller('myOrderCtrl',function($scope){
		var myOrder = $scope.myOrder = [
			{ 	storeLink: "javascript:;", 
				storeName: "某某某某某东西", 
				orderState:"待付款",
				prdLink: "javascript:;",
				prdImg: "img/orderimg.jpg",
				prdDesc: "我怎么知道你买了神马鬼",
				prdDescDetail: "颜色：XXX 类型：XXX",
				prdPrice: "299.9",
				prdCount: "1",
				prdBtnState: '<a href="#/cashier" class="pay-btn">付款</a>'
			},
			{ 	storeLink: "javascript:;", 
				storeName: "某某某某某东西", 
				orderState:"交易关闭",
				prdLink: "javascript:;",
				prdImg: "img/orderimg2.jpg",
				prdDesc: "我怎么知道你买了神马鬼",
				prdDescDetail: "颜色：XXX 类型：XXX",
				prdPrice: "299.9",
				prdCount: "2",
				prdBtnState: "<a href='#/detail' class='delete-btn'>删除</a> <a>再次购买</a>"
			},
			{ 	storeLink: "javascript:;", 
				storeName: "某某某某某东西", 
				orderState:"交易完成",
				prdLink: "javascript:;",
				prdImg: "img/orderimg3.jpg",
				prdDesc: "我怎么知道你买了神马鬼",
				prdDescDetail: "颜色：XXX 类型：XXX",
				prdPrice: "299.9",
				prdCount: "3",
				prdBtnState: '<a class="delete-btn">删除</a> <a href="#/detail">再次购买</a> <a>追加评论</a>'
			}
		];
	})

	// 购物车模块
	.controller("shoppingCtrl",function($scope){
		var dataList = $scope.dataList = [
			{ 	Bol:true,
				breed:"单品",
				items:'0',
				prdLink:"#/detail",
				prdImg:"img/1470_thumb_G_1421372687576.jpg",
				prdTitle:"人是人他妈的，妖是妖他妈的",
				color:"眼瞎吗？",
				onePrice:"299.9",
				num:"1",
				price:""
			},
			{ 	Bol:true,
				breed:"单品",
				items:'1',
				prdLink:"#/detail",
				prdImg:"img/LH6105-C2(2).jpg",
				prdTitle:"人是人他妈的，妖是妖他妈的",
				color:"眼瞎吗？",
				onePrice:"399.9",
				num:"1",
				price:""
			}
		];
		//总价格的计算
		$scope.allPrices=function(){
			$scope.allprice=0;
			angular.forEach($scope.dataList,function(data,index,array){
				data.price=data.num*data.onePrice;
				if(data.Bol==true){
					$scope.allprice+=parseInt(data.price);
				}
			})
			return $scope.allprice;
		};
		

        // 移除一项  
        $scope.remove=function(index){  
            if(confirm('确定移除此项吗？')){  
                $scope.dataList.splice(index,1);  
            }  
        }; 
        // 清空购物车
        $scope.removeAll=function(){  
            if(confirm('确定清空购物车吗？')){  
                $scope.dataList.splice(0);  
            }  
        }; 
	})
		/* 加 */
		.directive('myAdds',function(){
			return {
				link:function($scope, element, attr){
					element.click(function(){
						var This=this
						angular.forEach($scope.dataList,function(data,index,array){
							if(attr.items==data.items){
								data.num=parseInt(data.num)+1;
								$scope.allPrices();
								$scope.$apply() //刷新视图
							}	 
						});
					});
				} 
			}
		})

		/* 减 */
		.directive('myMinus',function(){
			return {
				link:function($scope, element, attr){
					element.click(function(){
						var This=this;
						angular.forEach($scope.dataList,function(data,index,array){
						 
							if(attr.items==data.items){
							 
								if(data.num<=1){
								 
									if(confirm('是否删除该产品')){
										data.num=0;
										$(This).siblings('input').val(0);
										$scope.allPrices();
										$scope.$apply();
										//delete array[index];
										$scope.dataList.splice(index,1)
										$(This).parents('.cart').remove();
									}
										 
								}else{
									data.num=parseInt(data.num)-1;
								};
								 
								$scope.allPrices();
								$scope.$apply();
							}
						});
					});
				} 
			}
		})

		/* 单选 */
		.directive('oneCheck',function(){
			return function($scope, element, attr){
				element.click(function(){
					var This=this;
					angular.forEach($scope.dataList,function(data,index,array){
						if(attr.items==data.items){
							var isCheck=$(This).prop('checked');
							data.Bol=isCheck;
							$scope.allPrices();
							$scope.$apply();
						}
					})
				});
			}
		})

		/* 全选或者取消全选 */
		.directive('allOrcan',function(){
			return function($scope, element, attr){
				element.click(function(){
					var isCheck=$(this).find('input').prop('checked');
					if(isCheck){
						$('.cart input[type=checkbox]').prop('checked',true);
					}else{
						$('.cart input[type=checkbox]').prop('checked',false);
					}
					angular.forEach($scope.dataList,function(data,index,array){
						data.Bol=isCheck;
					})
					$scope.allPrices();
					$scope.$apply();
				})
			}
		})

	// 确认订单1 
	.controller("confirmOrderCtrl",function(){

	})
	// 确认订单2
	.controller("confirmCtrl",function($scope){
	 	var confirmOrds = $scope.confirmOrds = [
	 		{ 	merchant:"由某某某莫某某发货",
	 			img:"img/orderimg.jpg",
	 			desc:"我怎么知道你买了神马鬼",
	 			descDetail:"颜色：XXX 类型：XXX",
	 			price:"299.9",
	 			num:"1",
	 			freight:"包邮"
	 		},
	 		{ 	merchant:"由某某某莫某某发货",
	 			img:"img/orderimg2.jpg",
	 			desc:"我怎么知道你买了神马鬼",
	 			descDetail:"颜色：XXX 类型：XXX",
	 			price:"299.9",
	 			num:"1",
	 			freight:"包邮"
	 		},
	 		{ 	merchant:"由某某某莫某某发货",
	 			img:"img/orderimg3.jpg",
	 			desc:"我怎么知道你买了神马鬼",
	 			descDetail:"颜色：XXX 类型：XXX",
	 			price:"299.9",
	 			num:"1",
	 			freight:"包邮"
	 		}
	 	];
	})

	// 收银台
	.controller("cashierCtrl",function(){

	})

	// 立即购买
	.controller("buyNowCtrl",function(){

	})

	.controller('parentCtrl', function ($scope, $location) {
	    $scope.jump = function (url) {
	        $location.path(url);
	    }
	})
