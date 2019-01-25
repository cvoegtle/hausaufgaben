package org.voegtle.homework.util

import com.googlecode.objectify.ObjectifyService
import org.voegtle.homework.data.Administrator
import java.util.logging.Logger
import javax.servlet.http.HttpServletRequest

fun extractOptionalUserName(request: HttpServletRequest) = request.userPrincipal?.name

fun extractUserName(request: HttpServletRequest): String {
  val userName = extractOptionalUserName(request)
  if (userName == null) {
    logException("This action requires a login")
    throw LoginRequiredException("This action requires a login")
  }
  return userName
}

fun checkAuthorisation(userName: String) {
  if (!isAuthorised(userName)) {
    throw PermissionDenied("Für diese Aktion bist Du nicht berechtigt")
  }
}

fun isLoggedIn(userName: String?) = userName != null

fun isAuthorisedNullable(userName: String?) = userName != null && isAuthorised(userName)

fun isAuthorised(userName: String): Boolean {
  val users = ObjectifyService.ofy().load().type(Administrator::class.java).filter("gmailAddress", userName.toLowerCase()).filter("active", true)
      .list()
  return users.size == 1
}

fun equalsIgnoreCase(first: String, second: String?) = if (second == null) false else first.toLowerCase() == second.toLowerCase()

private fun logException(message: String) {
  val log = Logger.getLogger("UserUtil")
  log.warning(message)
}

class LoginRequiredException(override val message: String) : Exception(message)

class PermissionDenied(override val message: String) : Exception(message)