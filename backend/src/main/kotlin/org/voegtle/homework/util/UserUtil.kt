package org.voegtle.homework.util

import java.util.logging.Logger
import javax.servlet.http.HttpServletRequest

fun extractUserName(request: HttpServletRequest, exceptionIfNull: Boolean = true): String? {
  val userName = request.userPrincipal?.name
  if (exceptionIfNull && userName == null) {
    logException("This action requires a login")
    throw LoginRequiredException("This action requires a login")
  }
  return userName
}

fun checkAuthorisation(userName: String?) {
  if (!isAuthorised(userName)) {
    throw PermissionDenied("Für diese Aktion bist Du nicht berechtigt")
  }
}

fun isLoggedIn(userName: String?) = userName != null

fun isAuthorised(userName: String?) = "cvoegtle@gmail.com" == userName || "tom.schimmeck@gmail.com" == userName

private fun logException(message: String) {
  val log = Logger.getLogger("UserUtil")
  log.warning(message)
}

class LoginRequiredException(override val message: String): Exception(message)

class PermissionDenied(override val message: String): Exception(message)