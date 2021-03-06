package org.voegtle.homework

import com.google.appengine.api.users.UserService
import com.google.appengine.api.users.UserServiceFactory
import com.googlecode.objectify.ObjectifyService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.voegtle.homework.data.Administrator
import org.voegtle.homework.data.UserStatus
import org.voegtle.homework.util.extractOptionalUserName
import org.voegtle.homework.util.isAuthorisedNullable
import org.voegtle.homework.util.isLoggedIn
import java.util.logging.Logger
import javax.servlet.http.HttpServletRequest

@RestController class UserManagementService {
  protected val log = Logger.getLogger("UserManagementService")

  var userService = UserServiceFactory.getUserService()

  @GetMapping("/user/status")
  fun status(@RequestParam() startUrl: String, req: HttpServletRequest): UserStatus {
    val userName = extractOptionalUserName(req)
    val loggedIn = isLoggedIn(userName)
    val authorised = isAuthorisedNullable(userName)

    log.info("UserName=$userName,  currentUser=${userService?.currentUser?.email}")

    return UserStatus(name = userName, loggedIn = loggedIn, authorised = authorised,
                      url = localise(createUserManagementUrl(userService, startUrl, loggedIn), req))
  }

  fun createUserManagementUrl(userService: UserService, startUrl: String, loggedIn: Boolean)
      = if (loggedIn) createLogoutUrl(userService, startUrl) else userService.createLoginURL(startUrl)

  private fun createLogoutUrl(userService: UserService, startUrl: String) = userService.createLogoutURL(trimUrlParameter(startUrl))

  private fun trimUrlParameter(url: String): String {
    val startParameter = url.indexOf("?")
    return if (startParameter >= 0) url.substring(0, startParameter) else url
  }


  fun localise(url: String, req: HttpServletRequest): String {
    val scheme = req.scheme
    val hostname = req.serverName
    val port = req.serverPort
    return if (hostname == "localhost") "$scheme://$hostname:$port$url" else url
  }
}