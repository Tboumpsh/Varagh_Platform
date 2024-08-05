import "/Lib/silverBox/silverBox.min.scss";

import silverBox from "/Lib/silverBox/silverBox.min";

function removeMassage()
{
    setTimeout(() => {
        silverBox({ removeSilverBox: "all" });
      }, 3000);
}
export default removeMassage