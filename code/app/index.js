/**
 * Created by zhongmc on 2017/2/20.
 */
var cartController = function ($scope) {
    $scope.cart = [
        {
            id : 1000,
            name : 'iphone1',
            quantity : 10,
            price : 2000
        },
        {
            id : 1001,
            name : 'iphone2',
            quantity : 12,
            price : 2000
        },
        {
            id : 1002,
            name : 'iphone3',
            quantity : 19,
            price : 2000
        },
        {
            id : 1003,
            name : 'iphone1',
            quantity : 10,
            price : 2000
        },
        {
            id : 1004,
            name : 'iphone1',
            quantity : 10,
            price : 2000
        }
    ];

    /**
     * 计算总数
     * **/
    $scope.totalQuantity = function () {
        var total = 0;
        angular.forEach($scope.cart,function (item) {
            total += parseInt(item.quantity);
        });
        console.log(total);
        return total;
    };

    /**
     * 计算总价
     * **/
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart,function (item) {
            total += item.quantity*item.price;
        });
        console.log(total);
        return total;
    };
    /**
     * 移除操作
     * **/
    $scope.remove = function (id) {
        console.log(id);
        var index = -1;
        angular.forEach($scope.cart,function (item,key) {
            if (id===item.id){
                index = key;
            }
        });
        if (index>-1){
            $scope.cart.splice(index,1);
        }
    }

    /**
     *  清空操作
     * **/
    $scope.removeAll = function () {
        $scope.cart = {};
    }

    /**
     * 新增操作
     * **/
    $scope.add = function (id) {
        angular.forEach($scope.cart,function (item) {
           if (item.id===id){
               ++item.quantity;
           }
        });
    }

    /**
     * 减少操作
     * **/
    $scope.reduce = function (id) {
        angular.forEach($scope.cart,function (item) {
            if (item.id===id){
                if(item.quantity>1){
                    --item.quantity;
                }else {
                    var returnType = confirm("你确定要从购物车移除吗？");
                    if (returnType){
                        $scope.remove(id);
                    }
                }
            }
        });
    }

    $scope.$watch('cart',function (newValue,oldValues) {
        angular.forEach($scope.cart,function (item,key) {
            if (item.quantity<1){
                var returnType = confirm("你确定要从购物车移除吗？");
                if (returnType){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValues[key].quantity;
                }
            }
        });
    },true);
}