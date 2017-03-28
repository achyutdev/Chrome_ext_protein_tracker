$(function(){
    chrome.storage.sync.get(['total','goal'],function(item){
        $('#total').text(item.total);
        $('#goal').text(item.goal);
    });
    $('#addAmount').click(function(){
       chrome.storage.sync.get(['total','goal'],function(item){
           var newTotal =0;
           if(item.total){
               newTotal+=parseInt(item.total);
           }
           var amount =$('#amount').val();
           if(amount){
               newTotal += parseInt(amount);
           }
           chrome.storage.sync.set({ 'total':newTotal });
           $('#total').text(newTotal);
           $('#amount').val('');

           if(newTotal>=item.goal){
               var opt = {
                type:"basic",
                title:"Goal Match !",
                message: "Congratulation you reach your goal of "+item.goal + "!",
                iconUrl:"icon.png"
            }
            chrome.notifications.create('goalReached', opt, function(){});
           }
       });
    });
});