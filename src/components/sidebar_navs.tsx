import { ChartBarIcon, ChevronDownIcon, ChevronUpIcon, DesktopComputerIcon,} from "@heroicons/react/outline";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../../styles/SideNavbar.module.css'



const ListRoutes = ()=>{
  const openObj = {
    systemOpen  : true,
    dashboardOpen : false,
    usersOpen : false,
    reportOpen : false
  }
  const [opens, setOpens] = useState(openObj);

  const router  = useRouter();

  
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', 
      color : "white", fontSize : "2rem" , fontWeight :  "normal"}}
      component="nav"
    >
      <div  className = {`${styles.divider}`} />

      {/* SYSTEM */}
      <ListItemButton>
        <ListItemIcon>
          <DesktopComputerIcon className={`${styles.s_icon}`}/>
        </ListItemIcon>
        <ListItemText primary="System" />
        {opens.systemOpen ? <ChevronUpIcon className={`${styles.s_icon}`} />: <ChevronDownIcon className={`${styles.s_icon}`} /> }
      </ListItemButton>

      <div  className = {`${styles.divider}`} />

      <Collapse in={opens.systemOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* DASHBOARD */}
          <ListItemButton onClick={()=> setOpens({...opens, dashboardOpen : !opens.dashboardOpen})}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {opens.dashboardOpen ? <ChevronUpIcon className={`${styles.s_icon}`} />: <ChevronDownIcon className={`${styles.s_icon}`} /> }  
          </ListItemButton>

          <div  className = {`${styles.divider}`} />


          <Collapse in={opens.dashboardOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </List>
          </Collapse>


          <div  className = {`${styles.divider}`} />

          {/* USERS */}

          <ListItemButton onClick={()=> setOpens({...opens, usersOpen : !opens.usersOpen})}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Users" />
            {opens.usersOpen ? <ChevronUpIcon className={`${styles.s_icon}`} />: <ChevronDownIcon className={`${styles.s_icon}`} /> }
          </ListItemButton>


          <div  className = {`${styles.divider}`} />

          <Collapse in={opens.usersOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <ListItemButton sx={{ pl: 4 }} onClick = {()=> router.push("/users")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>

              <div  className = {`${styles.divider}`} />

              
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </List>
          </Collapse>



        </List>
      </Collapse>


      


      {/* Reports */}

      <ListItemButton onClick={()=> setOpens({...opens, reportOpen: !opens.reportOpen})}>
        <ListItemIcon>
          <ChartBarIcon className={`${styles.s_icon}`}/>
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {opens.reportOpen ? <ChevronUpIcon className={`${styles.s_icon}`} />: <ChevronDownIcon className={`${styles.s_icon}`} /> }
      </ListItemButton>

      <Collapse in={opens.reportOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick = {()=> router.push("/cdrs")}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="CDRs" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}



export default ListRoutes;